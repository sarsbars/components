function Button({ variant, children }) {
    const className = variant === 'main' ? 'button-main' : 'button-secondary';
    return (
        <button className={className}>
            {children}
        </button>
    );
}

export default Button;