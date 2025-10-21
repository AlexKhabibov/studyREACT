function Icon({ onReset }) {
    return (
        <div onClick={onReset}
            style={{ fontSize: '100px' }}>
            ✅
        </div>
    );
}

export default Icon;