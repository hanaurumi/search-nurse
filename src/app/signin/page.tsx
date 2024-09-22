"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';

export default function SignUp() {
  
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({ id, password, confirmPassword });
    router.push('/login'); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー（必要であれば追加） */}
      <header className="bg-white flex items-center justify-end p-2 shadow-md">
        <nav className="flex space-x-6 ">
          <a href="/search" 
          className="text-pastelPink text-xl hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
          >検索
          </a>

          <a href="/help" 
          className="text-pastelPink text-xl hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
          >ヘルプ
          </a>
        </nav>
      </header>

    
      <div 
        className="flex-grow bg-cover bg-center opacity-65" 
        style={{ 
          backgroundImage: 'url("/image/peace.jpeg")',
          height: '200px', // ログインページと一致するように調整
          width: '100%',
        }}
      ></div>

     
      <div className="text-center p-6 bg-white">
        <h1 className="text-6xl font-bold text-pastelPink leading-tight">Nurse Searchへようこそ</h1>
        <p className="text-Neutral text-[1.375rem] mt-2">
          スキルを高め、相乗効果を発揮できる最適なパートナーを見つけましょう。ここから始めましょう！
        </p>
      </div>
      
      <div className="flex justify-center items-center flex-grow bg-pastelBlue">
        <form
          onSubmit={handleSignUp}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-pastelPink">サインアップ</h2>

          <div className="mb-4">
            <label 
                 htmlFor="id" 
                 className="block text-pastelPink">
                  ID:
             </label>

            <input
              type="text"
              id="id"
              className="w-full p-2 border border-gray-300 rounded"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label 
                  htmlFor="password" 
                  className="block text-pastelPink"
                 >
                  パスワード:
            </label>

            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label 
                  htmlFor="confirmPassword" 
                  className="block text-pastelPink"
                 >
                  パスワード確認:
            </label>

            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pastelPink text-white p-2 rounded"
          >
            サインアップ
          </button>

          <p className="mt-4 text-center text-gray-800">
            すでにアカウントをお持ちですか？{" "}
            <a href="/login" className="text-pastelPink underline">ログイン</a>
          </p>
        </form>
      </div>
    </div>
  );
}


