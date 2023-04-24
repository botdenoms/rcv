const CreateForm = ({close}) => {
    return (
        <div className="create-form">
            <div className="top">
                <span>New election</span>
                <div className="close" onClick={()=>close()}>
                    x
                </div>
            </div>
            
        </div>
    );
}

export default CreateForm;
