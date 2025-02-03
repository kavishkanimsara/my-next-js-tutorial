function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="m-2 p-4 bg-white shadow-md rounded-md text-black">
            {children}
        </div>
    );
}

export default Card;