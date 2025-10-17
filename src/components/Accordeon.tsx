import { useEffect, useState } from "react";

function Accordeon() {

    interface Section {
        id: number;
        title: string;
        content: string;
    };

    const sections: Section[] = [
        { id: 1, title: "Заголовок 1", content: "Content 1" },
        { id: 2, title: "Заголовок 2", content: "Content 2" },
        { id: 3, title: "Заголовок 3", content: "Content 3" },
    ];

    const [openId, setOpenId] = useState<number | null>(null);


    useEffect(() => {
        if (openId !== null) {
            localStorage.setItem("openSectionId", openId.toString());
        } else {
            localStorage.removeItem("openSectionId");
        }
    }, [openId]);

    const toggleSection = (id: number) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
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
    );
}

export default Accordeon;