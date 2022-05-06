import Cookies from 'js-cookie';

export const getMainAdminESEntities = () => {
  const gpEntitiesStored = Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo"))?.gp_entities : null;
  return gpEntitiesStored || [];
}