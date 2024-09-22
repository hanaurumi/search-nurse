"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ id, password });
    router.push('/top');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white flex justify-end p-4 shadow-md">
        <nav className="flex space-x-6">
          <a href="/search" 
          className="text-xl text-pastelPink hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
          >検索
          </a>

          <a href="/help" 
          className="text-xl font-medium text-pastelPink hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
          >ヘルプ
          </a>
        </nav>
      </header>

      <div 
        className="flex-grow bg-cover bg-center opacity-65" 
        style={{ 
          backgroundImage: 'url("/image/peace.jpeg")',
          height: '200px', 
          width: '100%',
        }}
      ></div>

      <div className="text-center p-6 bg-white">
          <h1 className="text-6xl font-bold text-pastelPink leading-tight">Nurse Searchへようこそ</h1>
            <p className="text-Neutral text-[1.375rem] mt-2">
               違いを活かして相乗効果・スキルUP。あなたに最適なパートナーを見つけましょう!
            </p>
      </div>

      <div className="flex justify-center items-center flex-grow bg-pastelBlue">
        <form 
           onSubmit={handleLogin} 
           className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
           >

          <h2 className="text-2xl font-semibold mb-4 text-sky-700">ログイン</h2>

          <div className="mb-4">
            <label 
                htmlFor="id" 
                className="block text-sky-700"
                >
                  ID:
            </label>

            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label 
                  htmlFor="password" 
                  className="block text-sky-700"
                >
                    パスワード:
            </label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-sky-600 text-white p-2 rounded"
          >
            ログイン
          </button>

          <p className="text-center mt-4 text-gray-800">
            アカウントをお持ちでないですか？ 
            <a href="/signin" className="text-pastelPink underline">新規登録へ</a> 
          </p>
        </form>
      </div>
    </div>
  );
}