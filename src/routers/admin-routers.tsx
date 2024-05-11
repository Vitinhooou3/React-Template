import { LucideHandshake, LucideHome, LucideLock, LucideMailbox, LucideMenu } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import SidebarRoot from '../components/sidebar-root'
import SidebarHref from '../components/sidebar-href'
import SidebarMenu from '../components/sidebar-menu'
import SidebarItem from '../components/sidebar-item'
import SidebarContent from '../components/sidebar-content'
import SidebarHamburguer from '../components/sidebar-hamburguer'
import SidebarContext from '../components/sidebar-context'
import If from '../components/if'

function AdminRouters() {
    const { logout, isAuthenticated } = useContext(AuthContext)

    return (
        <If conditional={isAuthenticated}>
            <SidebarContext>
                <SidebarRoot>
                    <SidebarMenu>
                        <SidebarItem href='/'>
                            <LucideHome className='w-6 h-6' strokeWidth={2} />
                            <SidebarHref>Home</SidebarHref>
                        </SidebarItem>
                        <SidebarItem href='/brokers'>
                            <LucideHandshake className='w-6 h-6' strokeWidth={2} />
                            <SidebarHref>Parceiros</SidebarHref>
                        </SidebarItem>
                        <SidebarItem href='/mailings'>
                            <LucideMailbox className='w-6 h-6' strokeWidth={2} />
                            <SidebarHref>Campanhas</SidebarHref>
                        </SidebarItem>
                        <SidebarItem href='/admins'>
                            <LucideLock className='w-6 h-6' strokeWidth={2} />
                            <SidebarHref>Administradores</SidebarHref>
                        </SidebarItem>
                        <SidebarItem onClick={logout} href='' variation='spacing-top'>
                            <LucideHome className='w-6 h-6' strokeWidth={2} />
                            <SidebarHref>Exit </SidebarHref>
                        </SidebarItem>
                    </SidebarMenu>
                    <SidebarContent>
                        <SidebarHamburguer>
                            <LucideMenu className='w-7 h-7 text-zinc-300' />
                        </SidebarHamburguer>
                        <Routes>
                        </Routes>
                    </SidebarContent>
                </SidebarRoot>
            </SidebarContext>
        </If>
    )
}

export default AdminRouters