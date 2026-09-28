import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DEFAULT_SIZE = 32;

interface CustomIconButtonProps {
  children: React.ReactNode;
  path: string;
}

export const CustomIconButton = ({ children, path }: CustomIconButtonProps) => {
  const navigate = useNavigate();

  const onHandleClick = async () => {
    try {
      await navigate(path);
    } catch {
      console.log("Path not found!!!");
    }
  };

  return (
    <IconButton
      color="info"
      sx={{ width: DEFAULT_SIZE, height: DEFAULT_SIZE }}
      onClick={() => void onHandleClick()}
    >
      {children}
    </IconButton>
  );
};
