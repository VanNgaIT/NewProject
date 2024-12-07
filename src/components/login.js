import React, { useState } from 'react';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            console.log(response.data); // Log phản hồi để kiểm tra

            if (response.data.message === 'Đăng nhập thành công') {
                const userId = response.data.userId; // Kiểm tra nếu userId tồn tại trong response
                console.log('User ID:', userId); // Log userId để kiểm tra

                if (userId) {
                    localStorage.setItem('userId', userId);
                    navigate('/home');
                } else {
                    console.error('Không tìm thấy userId trong phản hồi');
                }
            }
        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
        }
    };

    const goToSignup = () => {
        navigate('/signup'); // Điều hướng đến trang đăng ký
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-left">
                    <h1>FriendSpace</h1>
                    <p>FriendSpace giúp bạn tương tác với bạn bè và người thân</p>
                </div>
                <div className="login-right">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email hoặc số điện thoại"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-login">Đăng nhập</button>
                        <a href="/" className="forgot-password">Quên mật khẩu?</a>
                        <button type="button" className="btn-signup" onClick={goToSignup}>Tạo tài khoản mới</button>
                    </form>
                </div>
            </div>
            <footer className="login-footer">
                <p>Ứng Dụng Quản Lý và Tương Tác Xã Hội</p>
            </footer>
        </div>
    );
};

export default Login;