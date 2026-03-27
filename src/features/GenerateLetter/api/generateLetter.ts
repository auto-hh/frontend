import type { Vacancy } from "@/entities/vacancies";
import { delay } from "@/shared/lib";

export async function generateLetter(vacancy: Vacancy) {
    await delay(1000);

    console.log(vacancy);

    return `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
deleniti reprehenderit cumque assumenda facere reiciendis ipsum
nemo eveniet quam itaque consequatur voluptates sapiente quidem
qui possimus sint, nisi architecto velit.`;
}
