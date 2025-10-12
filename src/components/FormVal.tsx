import { useEffect, useState } from "react";

function FormValidation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const newErrors = { name: "", email: "" };

        if (name.trim() === "") {
            newErrors.name = "Имя не может быть пустым";
        }

        if (email.trim() === "") {
            newErrors.email = "Email обязателен";
        } else if (!email.includes("@")) {
            newErrors.email = "Некорректный email";
        }

        setErrors(newErrors);
    }, [name, email]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!errors.name && !errors.email) {
            setIsSubmitted(true);
            console.log("✅ Данные отправлены:", { name, email });
        } else {
            setIsSubmitted(false);
            console.log("❌ Ошибки валидации:", errors);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                setIsSubmitted(false);
                setName("");
                setEmail("");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px", width: "300px" }}>
            <label>
                Имя:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ borderColor: errors.name ? "red" : "gray" }}
                />
                {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>}
            </label>

            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: errors.email ? "red" : "gray" }}
                />
                {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
            </label>

            <button type="submit" disabled={!!errors.name || !!errors.email}>
                Отправить
            </button>

            {isSubmitted && <p style={{ color: "green" }}>Форма успешно отправлена ✅</p>}
        </form>
    );
}

export default FormValidation;