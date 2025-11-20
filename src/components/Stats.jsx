import React, { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 30); // updates roughly every 30ms
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 30);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}+</span>;
};

const Stats = () => {
    const stats = [
        { label: "Trusted Partners", value: 15 },
        { label: "Shops", value: 8 },
        { label: "Years Experience", value: 50 },
        { label: "Staff", value: 100 },
        { label: "Customers", value: 2500 },
    ];

    return (
        <section className="flex flex-wrap justify-center items-center gap-8 py-12"  style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center shadow p-4 px-8 rounded w-40 h-40">
                    <h2 className="text-4xl font-bold text-black">
                        <Counter end={stat.value} />
                    </h2>
                    <p className="text-center mt-2 text-gray-700 font-medium uppercase">{stat.label}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
