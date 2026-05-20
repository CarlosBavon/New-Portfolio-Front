import React, { useState, useEffect } from 'react';
import { fetchStats, incrementVisitor } from '../services/api';
import { FiFolder, FiMail, FiMousePointer, FiUsers } from 'react-icons/fi';
import './StatsWidget.css';

const StatsWidget = () => {
    const [stats, setStats] = useState({
        totalProjects: 0,
        totalMessages: 0,
        totalClicks: 0,
        totalVisitors: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStats = async () => {
            try {
                // Increment visitor count
                await incrementVisitor();

                const { data } = await fetchStats();
                setStats(data);
            } catch (error) {
                console.error('Stats error:', error);
            } finally {
                setLoading(false);
            }
        };
        loadStats();
    }, []);

    const statItems = [
        { icon: FiFolder, label: 'Projects', value: stats.totalProjects },
        { icon: FiMail, label: 'Messages', value: stats.totalMessages },
        { icon: FiMousePointer, label: 'Clicks', value: stats.totalClicks },
        { icon: FiUsers, label: 'Visitors', value: stats.totalVisitors }
    ];

    if (loading) return <div className="stats-loading">Loading stats...</div>;

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {statItems.map((item, idx) => (
                        <div key={idx} className="stat-card fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <item.icon className="stat-icon" size={32} />
                            <h3 className="stat-value">{item.value.toLocaleString()}</h3>
                            <p className="stat-label">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsWidget;