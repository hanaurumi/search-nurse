"use client";

import { useState } from 'react';
import '../globals.css';
import Link from 'next/link';

const ProfileRegistration = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>();
  const [gender, setGender] = useState('');
  const [appeal, setAppeal] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, age, gender, appeal });
    // ここではページ遷移を行わず、ログを出力するだけにします
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pastelBlue">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-pastelPink">プロフィール入力</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-pastelPink">氏名:</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-pastelPink">年齢:</label>
          <select
            id="age"
            className="w-full p-2 border border-gray-300 rounded"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          >
            <option value="" disabled>Select Age</option>
            {Array.from({ length: 10 },(_, index) => {
              const value = 20 + index * 5;
              return <option key={value} value={value}>{`${value}-${value + 4}`}</option>;
            })}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-pastelPink">性別:</label>
          <select
            id="gender"
            className="w-full p-2 border border-gray-300 rounded"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>性別選択</option>
            <option value="Male">男性</option>
            <option value="Female">女性</option>
          </select>
        </div>

        <div className="mb-4">
          <label 
                htmlFor="appeal" 
                className="block text-pastelPink"
                >
                  アピールポイント:
          </label>

          <textarea
            id="appeal"
            className="w-full p-2 border border-gray-300 rounded"
            value={appeal}
            onChange={(e) => setAppeal(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-pastelPink text-white p-2 rounded flex-grow flex-basis hover:scale-105 hover:shadow-lg"
            style={{ height: '50px', marginRight: '8px' }}
          >
            登 録
          </button>
          <Link href="/profileDetail">
            <span
              className="bg-pastelPink text-white p-2 rounded flex-grow flex-basis text-center cursor-pointer flex items-center justify-center hover:scale-105 hover:shadow-lg"
              style={{ height: '50px', marginLeft: '8px' }}
            >
              次へ（プロフィール詳細入力）
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProfileRegistration;
