import Child1OfChild2 from "./Child1OfChild2";


const Child2 = (props) => {
    const {data,increaseAgeById} = props;

    const handleIncreaseAgeById = () => {
        if(!data.id) return;

        increaseAgeById(data.id);
    }

    return <div>
        <div className="text-center">
            <h2 className="fs-4">Child 2</h2>
            <p>My name: {data.name}</p>
            <p>My age: {data.age}</p>
            <button 
            type="button"
            className="py-2 px-5 rounded-pill"
            onClick={handleIncreaseAgeById}
            >Age</button>
            <hr/>
            <Child1OfChild2 daddyName = {data.name}/>
        </div>
    </div>
}

export default Child2;