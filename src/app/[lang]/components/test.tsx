
import { getPublic } from '@/src/api/getPublic';


export default async function Test() {
    const { teachers } = await getPublic("sliderImages")

    return (
        <h1>{teachers.Akmaral}</h1>
    );
}

