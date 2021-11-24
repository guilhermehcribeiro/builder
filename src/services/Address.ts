import { responseGetAddress } from 'api/response/address';
import { get } from 'helpers/api';
import { ADDRESS_API_KEY } from 'settings';

const getAddress = async (lat: number, long: number) => {
  const req = await get(`/reverse?access_key=${ADDRESS_API_KEY}&query=${lat},${long}&limit=1`, {}, {}, true);
  return responseGetAddress(req?.data);
};
export default {
  getAddress
};
