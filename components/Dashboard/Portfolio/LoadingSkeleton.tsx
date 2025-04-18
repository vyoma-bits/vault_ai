import React from "react";

export function PortfolioLoadingSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 animate-gradientMove"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>

      {/* Header Skeleton with shimmer effect */}
      <div className="glass-effect p-6 rounded-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-3">
            <div className="h-8 w-36 rounded-lg bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-purple-500/20 animate-shimmer"></div>
            <div className="h-4 w-48 rounded-lg bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-purple-500/20 animate-shimmer"></div>
          </div>
          <div className="flex gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-purple-500/20 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Card Skeleton with pulsing circle */}
        <div className="lg:col-span-2 glass-effect rounded-2xl p-6 animate-float">
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-2">
              <div className="h-5 w-32 rounded-lg bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-purple-500/20 animate-shimmer"></div>
              <div className="h-8 w-48 rounded-lg bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-purple-500/20 animate-shimmer"></div>
            </div>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <div className="relative w-[300px] h-[300px]">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-spin"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute inset-[10%] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-spin"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute inset-[20%] rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-spin"
                style={{ animationDuration: "5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Asset Distribution Skeleton with staggered animations */}
        <div className="glass-effect rounded-2xl p-6">
          <div className="h-6 w-48 bg-gray-700/50 rounded mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-700/20 rounded-xl animate-pulse"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600/50 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-16 bg-gray-600/50 rounded"></div>
                    <div className="h-3 w-24 bg-gray-600/50 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <div className="h-4 w-20 bg-gray-600/50 rounded ml-auto"></div>
                  <div className="h-3 w-16 bg-gray-600/50 rounded ml-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Chain Assets Skeleton with wave effect */}
        <div className="lg:col-span-3 space-y-4">
          <div className="h-6 w-32 bg-gray-700/50 rounded"></div>
          <div className="grid gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="glass-effect p-4 rounded-xl animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-600/50 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-24 bg-gray-600/50 rounded"></div>
                          <div className="h-4 w-16 bg-purple-500/20 rounded-full"></div>
                        </div>
                        <div className="h-3 w-32 bg-gray-600/50 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2 text-right">
                      <div className="h-4 w-24 bg-gray-600/50 rounded ml-auto"></div>
                      <div className="h-3 w-16 bg-gray-600/50 rounded ml-auto"></div>
                    </div>
                  </div>
                </div>
                {/* Dropdown Skeleton */}
                <div className="mt-1 ml-14 hidden">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="glass-effect p-3 rounded-lg animate-pulse mt-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gray-600/50 rounded-full"></div>
                          <div className="h-3 w-20 bg-gray-600/50 rounded"></div>
                        </div>
                        <div className="h-3 w-16 bg-gray-600/50 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
