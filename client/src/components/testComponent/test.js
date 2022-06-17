import { useApi } from "../../utils/useApi"
export default function Test(){
    var [res, err, reloadRes] = useApi('tests/test/', null, 'GET', false);
    return(
        <>
        {res &&
        
            <div>
                <h1>{res}</h1>
            </div>
        }
        </>
    )
}