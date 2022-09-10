const Color = (props) => {

    return (

        // boxes.map((box, idx) => {
                <div style={{
                    backgroundColor: props.box.color,
                    width: props.box.size + 'px',
                    height: props.box.size + 'px',
                    margin: '5px' }}
                ></div>

        //     </div>
        // // })

    );
};

export default Color;