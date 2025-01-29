import React from 'react';
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: Armaandeep Singh</p>
      <p>
         
        <Link href="https://github.com/Armaan-Virk/cprg306-assignments">
        GitHub Repository:
        </Link>
      </p>
    </div>
  );
}