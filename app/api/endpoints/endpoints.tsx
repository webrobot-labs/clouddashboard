// Base URL per le API e i media
export const baseUrl = process.env.NEXT_APP_BASE_URL as string;
export const baseUrlApi = `/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL as string;
export const socketUrl = process.env.NEXT_APP_BASE_URL as string;

// Funzione per generare il percorso delle risorse media
export const mediaPath = (url: string): string => {
  return `${baseUrlMedia}/uploads${url}`;
};

// Interfaccia degli endpoint
interface Endpoints {
  auth: {
    signup: string;
    login: string;
    forgotPassword: string;
  };
  projects: {
    getAllProjects: string;
    getProjectDetails: (id: string) => string;
    createProject: string;
    updateProject: (id: string) => string;
    deleteProject: (id: string) => string;
  };
  category: {
    getAllCategories: string;
    getCategory: (id: string) => string;
    createCategory: string;
    updateCategory: (id: string) => string;
    deleteCategory: (id: string) => string;
  };
  jobs: {
    getAllJobs: string;
    getJobDetails: (id: string) => string;
    createJob: string;
    updateJob: (id: string) => string;
    deleteJob: (id: string) => string;
  };
  datasets: {
    getAllDatasets: string;
    getDatasetDetails: (id: string) => string;
    createDataset: string;
    updateDataset: (id: string) => string;
    deleteDataset: (id: string) => string;
  };
  scripts: {
    getAllScripts: string;
    getScriptDetails: (id: string) => string;
    addScript: string;
    updateScript: (id: string) => string;
    deleteScript: (id: string) => string;
  };
}

// Definizione degli endpoint
export const endpoints: Endpoints = {
  auth: {
    signup: `${baseUrlApi}user/signup`,
    login: `${baseUrlApi}admin/user/signin`,
    forgotPassword: `${baseUrlApi}admin/user/send-password-reset-link`,
  },

  projects: {
    getAllProjects: `${baseUrlApi}project/getall`,
    getProjectDetails: (id: string) => `${baseUrlApi}project/details/${id}`,
    createProject: `${baseUrlApi}project/create`,
    updateProject: (id: string) => `${baseUrlApi}project/update/${id}`,
    deleteProject: (id: string) => `${baseUrlApi}project/delete/${id}`,
  },

  category: {
    getAllCategories: `${baseUrlApi}category/getall`,
    getCategory: (id: string) => `${baseUrlApi}category/${id}`,
    createCategory: `${baseUrlApi}category`,
    updateCategory: (id: string) => `${baseUrlApi}category/${id}`,
    deleteCategory: (id: string) => `${baseUrlApi}category/${id}`,
  },

  jobs: {
    getAllJobs: `${baseUrlApi}job/getall`,
    getJobDetails: (id: string) => `${baseUrlApi}job/details/${id}`,
    createJob: `${baseUrlApi}job/create`,
    updateJob: (id: string) => `${baseUrlApi}job/update/${id}`,
    deleteJob: (id: string) => `${baseUrlApi}job/delete/${id}`,
  },

  datasets: {
    getAllDatasets: `${baseUrlApi}dataset/getall`,
    getDatasetDetails: (id: string) => `${baseUrlApi}dataset/getdetails/${id}`,
    createDataset: `${baseUrlApi}dataset/create`,
    updateDataset: (id: string) => `${baseUrlApi}dataset/update/${id}`,
    deleteDataset: (id: string) => `${baseUrlApi}dataset/delete/${id}`,
  },

  scripts: {
    getAllScripts: `${baseUrlApi}script/getall`,
    getScriptDetails: (id: string) => `${baseUrlApi}script/getdetails/${id}`,
    addScript: `${baseUrlApi}script/add`,
    updateScript: (id: string) => `${baseUrlApi}script/update/${id}`,
    deleteScript: (id: string) => `${baseUrlApi}script/delete/${id}`,
  },
};
