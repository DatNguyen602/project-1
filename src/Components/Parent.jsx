import { useContext, useReducer, useState } from "react";
import Child2 from "./Child2";
import mock from "./mock.json";

const Parent = () => {
    const [data,setData] = useState(mock);

    const increaseAgeById = id => {
        const idx = data.findIndex(item => item.id === id)
            if (idx === -1) return;

        const newData = [...data];
        newData[idx].age += 1;

        setData(newData);
        data[id].age = newData;
        // saveState('data', newData);
    }

    return <div className="">
        {
            data.map((value)=>{
                return <div key={value.id} className="text-center">
                    <p>Id: {value.id} - Name: {value.name} - Age: {value.age}</p>
                </div>
            })
        }
        <hr className=""/>
        <Child2 data={data[1]} increaseAgeById={increaseAgeById}/>
    </div>
}

export default Parent;