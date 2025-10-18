import { useState } from "react";

interface Section {
    id: number;
    title: string;
    content: string;
}

const sections: Section[] = [
    { id: 1, title: "Что такое React?", content: "React — это библиотека для создания пользовательских интерфейсов." },
    { id: 2, title: "Что делает useState?", content: "useState хранит состояние внутри функционального компонента." },
    { id: 3, title: "Что делает useEffect?", content: "useEffect выполняет побочные эффекты, например загрузку данных." },
];

function Accordion() {

    const [openId, setOpenId] = useState<number | null>(null);

    const toggleSection = (id: number) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <>
            <div style={{ width: "400px", margin: "0 auto" }}>
                {sections.map(section => (
                    <div
                        key={section.id}
                        style={{
                            border: "1px solid gray",
                            marginBottom: "8px",
                            borderRadius: "6px",
                        }}
                    >
                        <div
                            onClick={() => toggleSection(section.id)}
                            style={{
                                background: "grey",
                                padding: "10px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            {section.title}
                        </div>

                        {openId === section.id && (
                            <div style={{ padding: "10px", background: "grey" }}>
                                {section.content}
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </>
    );
}

export default Accordion;