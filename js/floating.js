body {
    background-color: #a57cff;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
}

#countdown {
    font-size: 2.2em;
    padding: 20px;
    letter-spacing: 1px;
    font-weight: 500;
}

@media (max-width: 600px) {
    #countdown {
        font-size: 1.4em;
        padding: 10px;
    }
}

.container {
    text-align: center;
}

h2 {
    font-family: 'Montserrat Alternates', sans-serif;
    color: black;
    margin-bottom: 20px;
    font-size: 1.8em;
    font-weight: 500;
}

@media (max-width: 600px) {
    h2 {
        font-size: 1.2em;
    }
}

.floating-images {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.float {
    position: absolute;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    animation: float 12s ease-in-out infinite;
    transform-origin: center center;
}

/* Điều chỉnh kích thước cho màn hình nhỏ */
@media (max-width: 600px) {
    .float {
        width: 100px;  /* Tăng kích thước từ 50px lên 75px */
        height: 100px;
        border-width: 2px; /* Giảm độ dày viền để cân đối hơn */
    }
}

/* Hình tròn */
.float.circle {
    border-radius: 50%;
}

/* Hình vuông */
.float.square {
    border-radius: 5%;
}

@keyframes float {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }
    25% {
        transform: translate(15px, -15px) rotate(5deg);
    }
    50% {
        transform: translate(0, 20px) rotate(0deg);
    }
    75% {
        transform: translate(-15px, -10px) rotate(-5deg);
    }
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}

/* Animation delays với khoảng thời gian ngẫu nhiên hơn */
.float:nth-child(1) { animation-delay: -2.1s; }
.float:nth-child(2) { animation-delay: -1.7s; }
.float:nth-child(3) { animation-delay: -3.3s; }
.float:nth-child(4) { animation-delay: -4.9s; }
.float:nth-child(5) { animation-delay: -2.8s; }
.float:nth-child(6) { animation-delay: -3.7s; }
.float:nth-child(7) { animation-delay: -5.4s; }
.float:nth-child(8) { animation-delay: -6.1s; }

