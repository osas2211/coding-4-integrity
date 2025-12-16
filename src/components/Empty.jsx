import { cn } from "@/lib/utils"

export function Empty({
  title,
  description,
  icon,
  action,
  className,
  compact = false,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        compact ? "py-6" : "py-12",
        className
      )}
    >
      {icon && <div className="mb-4 text-muted-foreground/50">{icon}</div>}
      <h3
        className={cn(
          "font-semibold text-foreground",
          compact ? "text-sm" : "text-lg"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "text-muted-foreground mt-2 max-w-sm",
            compact ? "text-xs" : "text-sm"
          )}
        >
          {description}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
