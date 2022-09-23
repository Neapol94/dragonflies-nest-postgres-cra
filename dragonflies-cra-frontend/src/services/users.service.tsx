import axios from "axios";
import { User } from "../interfaces/User";

export async function getListOfAllUsers(): Promise<User[]> {
  const data = await axios({
    method: 'get',
    url: 'http://localhost:8080/users/all'
  }).then(response => response.data);
  return data;
}