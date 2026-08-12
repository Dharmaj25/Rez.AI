import api from "@/lib/api";
const templateEndpoint = "/api/v1/template";

export const getTemplates = () => {
    return api.get(`${templateEndpoint}`);
}