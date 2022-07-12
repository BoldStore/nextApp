import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

function ToolTip(props) {
  return (
    <>
      {props.href ? (
        <Link href={props.href}>
          <Tooltip
            title={props.title}
            enterTouchDelay="1500"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "common.white",
                  color: "common.black",
                  fontSize: "14px",
                  fontWeight: "500",
                  "& .MuiTooltip-arrow": {
                    color: "common.white",
                  },
                },
              },
            }}
          >
            {props.children}
          </Tooltip>
        </Link>
      ) : (
        <Tooltip
          title={props.title}
          enterTouchDelay="1500"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "common.white",
                color: "common.black",
                fontSize: "14px",
                fontWeight: "500",
                "& .MuiTooltip-arrow": {
                  color: "common.white",
                },
              },
            },
          }}
        >
          {props.children}
        </Tooltip>
      )}
    </>
  );
}

export default ToolTip;
