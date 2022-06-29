export interface Client {

  id: number;
  urlImage: string;
  name1: string;
  lastName1: string;
  city: string;
  country: string;
  nickname: string;
  birthDate: Date;
  age: number;
  profession: string;
  demonym_fem: string;
  demonym_mas: string;
  gender: string;
  phrase: string;
  extraversion: number;
  intensity: number;
  adventurous: number;

}

export const ClientNull =
{

id: 0,
urlImage: '',
name1: '',
lastName1: '',
city: '',
country: '',
nickname: '',
birthDate: new Date("01/01/1900"),
age: 0,
profession: '',
demonym_fem: '',
demonym_mas: '',
gender: '',
phrase: '',
extraversion: 0,
intensity: 0,
adventurous: 0

}
