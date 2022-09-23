import axios from "axios";
import { Dragonfly } from "../interfaces/Dragonfly";

export async function getListOfDragonflies(): Promise<Dragonfly[]> {
  const data = await axios({
    method: 'get',
    url: 'http://localhost:8080/dragonflies'
  }).then(response => response.data);
  return data;
}

export async function getDragonflyById(id: number) {
  const data = await axios({
    method: 'get',
    url: `http://localhost:8080/dragonflies/${id}`
  }).then(response => response.data);
  return data;
}
