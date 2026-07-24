import React from 'react'
import { Suspense } from 'react';
import UserFallBack from './skeleton/userfallback'
import User from "./User"
export default function suspense() {
  return (
    <div>
        <Suspense fallback={<UserFallBack />}>
        <User />
        </Suspense>
    </div>
  )
}
