// File: app/week-2/student-info.js
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: Armaandeep Singh</p>
      <p>
        GitHub Repository: 
        <Link href="https://github.com/Armaan-Virk/cprg306-assignments">
          cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
