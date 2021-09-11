import Row from "./Row";

export default function Tabuleiro() {
    return (
        <div>
            <Row />
            <Row black={true} />
            <Row />
            <Row black={true} />
            <Row />
            <Row black={true} />
            <Row />
            <Row black={true} />
        </div>
    )
}