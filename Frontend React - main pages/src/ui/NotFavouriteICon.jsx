import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function NotFavouriteICon() {

  return (
    <IconButton
      role="button"
      aria-label="add to favorites"

    >
      <FavoriteIcon />
    </IconButton>
  );
}

export default NotFavouriteICon;
