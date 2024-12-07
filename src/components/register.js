import React, { useState } from 'react';
import '../styles/register.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState({ day: '1', month: 'Jan', year: '2000' });
    const [gender, setGender] = useState('female');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: `${firstName} ${surname}`,
            email: email,
            password: password,
            gender: gender,
            dateofbirth: `${dob.year}-${dob.month}-${dob.day}`, // Đảm bảo định dạng đúng cho ngày tháng
            image: '' // Thêm ảnh đại diện nếu cần
        };

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            if (response.ok) {
                alert("Đăng ký thành công");
            } else {
                alert(data.message || "Có lỗi xảy ra");
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert("Đã xảy ra lỗi khi đăng ký");
        }
    };

    return (
        <div className="signup-container">
            <h2>FriendSpace</h2>
            <h3>Tạo tài khoản mới</h3>
            <p>Nhanh chóng và dễ dàng</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Tên"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Họ"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <select onChange={(e) => setDob({ ...dob, day: e.target.value })} value={dob.day}>
                        {[...Array(31).keys()].map(i => <option key={i} value={i + 1}>{i + 1}</option>)}
                    </select>
                    <select onChange={(e) => setDob({ ...dob, month: e.target.value })} value={dob.month}>
                        {['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'].map(month =>
                            <option key={month} value={month}>{month}</option>)}
                    </select>
                    <select onChange={(e) => setDob({ ...dob, year: e.target.value })} value={dob.year}>
                        {[...Array(100).keys()].map(i =>
                            <option key={i} value={2024 - i}>{2024 - i}</option>)}
                    </select>
                </div>
                <div className="input-group">
                    <div className="gender-options">
                        <label>
                            <input
                                type="radio"
                                value="female"
                                checked={gender === 'female'}
                                onChange={() => setGender('female')}
                            />
                            Nữ
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="male"
                                checked={gender === 'male'}
                                onChange={() => setGender('male')}
                            />
                            Nam
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="custom"
                                checked={gender === 'custom'}
                                onChange={() => setGender('custom')}
                            />
                            Khác
                        </label>
                    </div>
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="signup-btn">Đăng ký</button>
            </form>
            <p className="login-link">
                Đã có tài khoản? <a href="/">Đăng nhập</a>
            </p>
        </div>
    );
};

export default Register;
