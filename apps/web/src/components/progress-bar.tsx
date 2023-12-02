export interface ProgressCircleProps {
  progress: number
}

export function ProgressCircle({ progress }: ProgressCircleProps) {
  return (
    <div>
      <svg className="w-full h-full" viewBox="0 0 100 100">
          
        <circle
          className=" text-alabaster-200 stroke-current"
          strokeWidth="12"

          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        
        <circle
          className=" text-eletricviolet-400 progress-ring__circle stroke-current"
          strokeWidth="12"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDashoffset="calc(400 - (400 * 45) / 100)"
        ></circle>

      </svg>
    </div>
  )
}