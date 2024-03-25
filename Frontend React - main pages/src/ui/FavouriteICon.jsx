import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FavouriteICon() {

  return (
    <IconButton
      role="button"
      aria-label="add to favorites"

    >
      <FavoriteIcon
        sx={{
          color: "red" ,
        }}
      />
    </IconButton>
  );
}

export default FavouriteICon;
