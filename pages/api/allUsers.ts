// import axios from 'axios';
import axios, { AxiosBasicCredentials } from 'axios';
import { baseUrl } from '../../src/components/myComplaints';

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  try {
    const object: any = req;

    const response = await fetch(`${baseUrl}users/`, {
      method: 'GET',
      headers: {
        Authorization: object,
      }
    });
    if (!response.ok) {
      throw new Error('Request failed with status code ' + response.status);
    }
    const data = await response.json();
    console.log('====================================');
    console.log(res.status(200).json(data), 'allUserspage');
    console.log('====================================');   
  } catch (error) {
    throw new Error('Error fetching userdata');
  }
}









