import react, { useState } from 'react';


const MessageForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100)



    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor( color );
        props.onNewSize( size );
        setColor("");
        setSize(100)
        props.onNewMessage(msg);

    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="card-header text-center">
                                <h1>Add Color</h1>
                            </div>
                            <div className="card-body d-flex justify-content-center align-itmes-center">
                            <input type="color" onChange={(e)=>setColor(e.target.value)} value={color}/>
                            <input type="number" min="100" onChange={(e)=>setSize(e.target.value)} value={size}/>
                                
                                {/* <textarea
                                    rows="4"
                                    cols="50"
                                    placeholder="Enter your message here"
                                    onChange={(e) => setMsg(e.target.value)}
                                    value={msg}
                                ></textarea> */}
                            </div>
                            <div className='d-flex justify-content-center align-itmes-center'>
                                <input className='btn btn-primary' type="submit" value="ADD" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
