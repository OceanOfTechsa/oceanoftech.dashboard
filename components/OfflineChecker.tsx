"use client"
import React from 'react'

const OfflineChecker = () => {
    function checkInternetAndRedirect(offlinePageUrl: string) {
        if (typeof navigator.onLine !== "undefined") {
            const currentUrl = encodeURIComponent(window.location.href);
            const offlineUrlWithReturn = `${offlinePageUrl}?returnUrl=${currentUrl}`;

            if (!navigator.onLine && window.location.pathname !== new URL(offlinePageUrl, window.location.origin).pathname) {
                window.location.href = offlineUrlWithReturn;
            }
        } else {
            console.warn("navigator.onLine is not supported in this browser.");
        }

        window.addEventListener("online", () => {
            const prevPage = localStorage.getItem("__prevPage") as string;
            window.location.href  = prevPage || "/";
        });

        window.addEventListener("offline", () => {
            localStorage.setItem("__prevPage", window.location.href);
            if (window.location.pathname !== new URL(offlinePageUrl, window.location.origin).pathname) {
                window.location.href = `/offline?${window.location.pathname}`;
            }
        });
    }
    checkInternetAndRedirect("/offline");
    return (
        <></>
    )
}
export default OfflineChecker
