"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

const UpdateForm = () => {
  const { data: session, update } = useSession();
  const [name, setName] = useState(`New ${session?.user?.name}`);

  if (!session?.user) return null;

  return (
    <>
      <h2 className="text-xl font-bold">Updating the session client-side</h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <input
          type="text"
          placeholder="New name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border border-gray-300 p-2 rounded"
        />
        <button
          onClick={() => update({ user: { name } })}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </div>
    </>
  );
};

export default function ClientExample() {
  const { data: session, status } = useSession();
  const [apiResponse, setApiResponse] = useState("");

  const makeRequestWithToken = async () => {
    try {
      const response = await fetch("/api/authenticated/greeting");
      const data = await response.json();
      setApiResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setApiResponse("Failed to fetch data: " + error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Client Side Rendering</h1>
      <p>
        This page fetches session data client-side using the{" "}
        <code>useSession</code> React Hook.
      </p>

      <div className="flex flex-col gap-4 rounded-md bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Third-party backend integration</h2>
        <p>Press the button to send a request to the backend API.</p>
        <div className="flex flex-col">
          <button
            disabled={!session?.accessToken}
            onClick={makeRequestWithToken}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Make API Request
          </button>
        </div>
        <pre>{apiResponse}</pre>
        <p className="italic">Note: This example requires an access token.</p>
      </div>

      {status === "loading" ? (
        <div>Loading...</div>
      ) : session ? (
        <div>
          <h2 className="text-xl font-bold">Session Data</h2>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ) : (
        <div>Please sign in to see session data</div>
      )}

      <UpdateForm />
    </div>
  );
}
