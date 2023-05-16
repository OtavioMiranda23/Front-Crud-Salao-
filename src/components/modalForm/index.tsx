import { useState } from "react";
import "./modal.css"
import { useSalaoDataMutate } from "../../hooks/useSalaoDataMutate";
import { ClinteDataInterface } from "../../interface/SalaoData";

interface inputProps {
    label: string,
    value: string | number,
    updateValue: (value: any) => void,
}

const Input = ({label, value, updateValue}: inputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}


export function ModalForm() {
    const [nomeCliente, setNomeCliente] = useState("");
    const [celular, setCelular] = useState("");
    const [mensagem, setMensagem] = useState("");

    const { mutate } = useSalaoDataMutate();
    
    const submit = () => {
        const salaoData: ClinteDataInterface = {
            nomeCliente,
            celular,
            mensagem
        }
        mutate(salaoData)
    }
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Marque um horário</h2>
                <form className="input-container">
                    <Input label="nome" value={nomeCliente} updateValue={setNomeCliente} />
                    <Input label="celular" value={celular} updateValue={setCelular} />
                    <Input label="horário" value={mensagem} updateValue={setMensagem} />
                </form>
                <button onClick={submit} className="btn-secondary">Postar</button>
            </div>
        </div>
    )
}