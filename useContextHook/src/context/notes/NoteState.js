import NoteContext from "./noteContext";

const NoteState= (props)=>{
    const state = {
        "name": "Amit",
        "age": "22",
        "email": "amit@mail.com"
    }

    return(
        <NoteContext.Provider value={state}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;