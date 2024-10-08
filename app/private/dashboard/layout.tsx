import Dashboard from '@/components/Dashboard'
import { NavbarElementDynamic } from '@/components/Layout'
import { createClient } from '@/utils/supabase/server'

import { redirect } from 'next/navigation'
import React from 'react'
type LayoutProps = {
  children: React.ReactNode
}


const Layout = async ({ children }: LayoutProps) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    redirect('/login')
  }
  return (
    <div className='h-[90vh]'>
      <NavbarElementDynamic data={data} />
      <Dashboard user={data.user} >
        {children}
      </Dashboard>
    </div>
  )
}

export default Layout
