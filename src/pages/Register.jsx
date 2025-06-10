import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

// 👉 Importa imágenes locales
import fondo from "../assets/Cel.jpg";
import logo from "../assets/logo.jpg";

const Register = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <Box
      sx={{
        width: "412px",
        height: "917px",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "373px",
          height: "869px",
          top: "48px",
          left: "19px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 0,
            left: "96px",
            WebkitTextStroke: "2px #770275",
            fontFamily: "Orbitron-Bold, Helvetica",
            fontWeight: 700,
            color: "white",
            fontSize: "30px",
            lineHeight: "30px",
            whiteSpace: "nowrap",
          }}
        >
          REGISTRO
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: "373px",
            height: "612px",
            top: "24px",
            left: 0,
            bgcolor: "#333333ab",
            borderRadius: 2,
            gap: 6,
          }}
        >
          {/* Nombre */}
          <FormControl
            sx={{
              position: "absolute",
              width: "326px",
              top: "24px",
              left: "24px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Nombre(s)
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { height: "34px", bgcolor: "white", borderRadius: 1 },
              }}
            />
          </FormControl>

          {/* Apellido paterno */}
          <FormControl
            sx={{
              position: "absolute",
              width: "150px",
              top: "97px",
              left: "24px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Apellido paterno
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { height: "34px", bgcolor: "white", borderRadius: 1 },
              }}
            />
          </FormControl>

          {/* Apellido materno */}
          <FormControl
            sx={{
              position: "absolute",
              width: "150px",
              top: "97px",
              left: "200px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Apellido materno
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { height: "34px", bgcolor: "white", borderRadius: 1 },
              }}
            />
          </FormControl>

          {/* Carrera */}
          <FormControl
            sx={{
              position: "absolute",
              width: "326px",
              top: "169px",
              left: "24px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Carrera en curso
            </Typography>
            <Select
              displayEmpty
              value=""
              IconComponent={ArrowDropDownIcon}
              renderValue={() => "Seleccionar"}
              sx={{
                height: "34px",
                bgcolor: "white",
                borderRadius: 1,
                "& .MuiSelect-select": {
                  paddingTop: "10px",
                  paddingBottom: "10px",
                },
              }}
            >
              <MenuItem value="">
                <em>Seleccionar</em>
              </MenuItem>
              <MenuItem value="ISC">Ingeniería en Sistemas</MenuItem>
              <MenuItem value="IA">Ingeniería en IA</MenuItem>
            </Select>
          </FormControl>

          {/* Boleta */}
          <FormControl
            sx={{
              position: "absolute",
              width: "180px",
              top: "241px",
              left: "24px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              No. de boleta
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { height: "34px", bgcolor: "white", borderRadius: 1 },
              }}
            />
          </FormControl>

          {/* Comprobante */}
          <FormControl
            sx={{
              position: "absolute",
              width: "122px",
              top: "241px",
              left: "226px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Comprobante
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: "34px",
                bgcolor: "#770275",
                borderRadius: 1,
                textTransform: "none",
              }}
              endIcon={<FileUploadIcon sx={{ width: 15, height: 15 }} />}
            >
              Subir
            </Button>
          </FormControl>

          {/* Correo */}
          <FormControl
            sx={{
              position: "absolute",
              width: "326px",
              top: "313px",
              left: "24px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Correo institucional
            </Typography>
            <TextField
              variant="outlined"
              placeholder="correo@alumno.ipn.mx"
              fullWidth
              InputProps={{
                sx: { height: "34px", bgcolor: "white", borderRadius: 1 },
              }}
            />
          </FormControl>

          {/* Contraseñas */}
          <Box
            sx={{
              position: "absolute",
              width: "326px",
              top: "393px",
              left: "24px",
            }}
          >
            <FormControl sx={{ width: "152px", mr: 2 }}>
              <Typography variant="subtitle1" sx={{ color: "white" }}>
                Contraseña
              </Typography>
              <TextField
                type="password"
                variant="outlined"
                InputProps={{
                  sx: { height: "34px", bgcolor: "white", borderRadius: 1 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityOffIcon sx={{ width: 20, height: 20 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl sx={{ width: "152px" }}>
              <Typography variant="subtitle1" sx={{ color: "white" }}>
                Confirmar
              </Typography>
              <TextField
                type="password"
                variant="outlined"
                InputProps={{
                  sx: { height: "34px", bgcolor: "white", borderRadius: 1 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityOffIcon sx={{ width: 20, height: 20 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>

          {/* Botón de registro */}
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              width: "252px",
              height: "32px",
              top: "483px",
              left: "61px",
              bgcolor: "#08001b",
              borderRadius: 1,
              fontFamily: "Orbitron-Bold, Helvetica",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            Registrarse
          </Button>

          {/* Checkbox */}
          <FormControlLabel
            sx={{
              position: "absolute",
              top: "522px",
              left: "76px",
            }}
            control={
              <Checkbox
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                sx={{
                  width: "15px",
                  height: "15px",
                  marginRight: 1,
                  "& .MuiSvgIcon-root": { width: 10, height: 10, color: "white" },
                }}
                icon={
                  <Box
                    sx={{
                      width: 15,
                      height: 15,
                      border: "1px solid #770275",
                      borderRadius: "4px",
                    }}
                  />
                }
                checkedIcon={
                  <Box
                    sx={{
                      width: 15,
                      height: 15,
                      bgcolor: "#770275",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon sx={{ width: 10, height: 10 }} />
                  </Box>
                }
              />
            }
            label={
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", color: "white", opacity: 0.7 }}
              >
                Acepto los{" "}
                <Link href="#" underline="always" sx={{ color: "white" }}>
                  términos y condiciones
                </Link>
                .
              </Typography>
            }
          />

          {/* Link a login */}
          <Typography
            sx={{
              position: "absolute",
              top: "560px",
              left: "60px",
              fontFamily: "Orbitron-Bold, Helvetica",
              fontSize: "15px",
              color: "white",
            }}
          >
            Ya tengo una cuenta.{" "}
            <Link
              href="/login"
              underline="none"
              sx={{ color: "#ffa4fd", fontWeight: 700 }}
            >
              Ingresar
            </Link>
          </Typography>
        </Box>

        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            position: "absolute",
            width: "294px",
            height: "266px",
            top: "603px",
            left: "40px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Register;
