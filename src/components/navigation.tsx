
import { SignInButton, 
    //UserButton 
     SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-17 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
                BuildTrack
                </h1>
          </div>
          <div className="flex items-center gap-4">
               {/*Sign in botton goes here*/}
          <SignInButton mode="modal"/>
         {/* <UserButton/>*/}
          <Link href="/user-profile">Profile</Link>
            <SignOutButton />
          </div>
          
        </div>
      </div>
    </nav>
  )
}