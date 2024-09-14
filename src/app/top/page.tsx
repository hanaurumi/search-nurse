


あなた:

"use client";

import { SupabaseClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';

const TopPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white flex items-center justify-end p-4 shadow-md">
        <nav className="flex space-x-4">
          <a href="/profileRegistration" className="text-pastelPink hover:text-blue-600 transition-colors duration-300">プロフィール</a>
          <a href="profileFile/workHistory" className="text-pastelPink hover:text-blue-600 transition-colors duration-300">詳細入力</a>
          <a href="/search" className="text-pastelPink hover:text-blue-600 transition-colors duration-300">検索</a>
          <a href="/help" className="text-pastelPink hover:text-blue-600 transition-colors duration-300">ヘルプ</a>
        </nav>
      </header>
        
      <div className="flex-grow bg-cover bg-center opacity-60" 
        style={{ 
          backgroundImage: 'url("/image/peace.jpeg")',
          height: '400px', // 視覚的インパクトのために高さを増やす
          width: '100%',
        }}>
      </div>

      <div className="text-center p-6 bg-white">
        <h1 className="text-6xl font-bold text-pastelPink leading-tight">Nurse Searchへようこそ</h1>
        <p className="text-Neutral text-[1.375rem] mt-2">
          スキルを高め、相乗効果を発揮できる最適なパートナーを見つけましょう。ここから始めましょう！
        </p>
      </div>

      <div className="flex justify-center items-center flex-grow bg-pastelBlue">
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold mb-4 text-pastelPink">さあ始めましょう</h2>
          <div className="flex justify-center space-x-8"> {/* Space between buttons */}
            <a 
               href="/signup" 
               className="bg-pastelPink text-white p-4 rounded-lg shadow-md text-xl inline-block transition-transform transform hover:scale-105">
               登録がまだの方
            </a>
            <a 
               href="/login" 
               className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-xl inline-block transition-transform transform hover:scale-105">
               登録済みの方
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
