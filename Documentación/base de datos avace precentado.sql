-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.7.2
-- PostgreSQL version: 9.4
-- Project Site: pgmodeler.com.br
-- Model Author: ---

SET check_function_bodies = false;
-- ddl-end --


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: "Productos" | type: DATABASE --
-- -- DROP DATABASE "Productos";
-- CREATE DATABASE "Productos"
-- ;
-- -- ddl-end --
-- 

-- object: public.producto | type: TABLE --
-- DROP TABLE public.producto;
CREATE TABLE public.producto(
	id_producto integer,
	id_tela integer,
	id_boton integer,
	id_hilo integer,
	id_etiqueta integer,
	CONSTRAINT id_producto PRIMARY KEY (id_producto)

);
-- ddl-end --
-- object: public.telas | type: TABLE --
-- DROP TABLE public.telas;
CREATE TABLE public.telas(
	id_tela integer,
	nombre varchar(35),
	textura varchar(35),
	"id_colorTela" integer,
	"id_diseñoTela" integer,
	"id_materialTela" integer,
	id_proveedor integer,
	CONSTRAINT id_tela PRIMARY KEY (id_tela)

);
-- ddl-end --
-- object: public.botones | type: TABLE --
-- DROP TABLE public.botones;
CREATE TABLE public.botones(
	id_boton integer,
	nombre varchar(35),
	id_forma integer,
	dimensiones varchar(30),
	tipo varchar(35),
	"id_colorBoton" integer,
	"id_materialBoton" integer,
	id_proveedor integer,
	CONSTRAINT id_boton PRIMARY KEY (id_boton)

);
-- ddl-end --
-- object: public.hilo | type: TABLE --
-- DROP TABLE public.hilo;
CREATE TABLE public.hilo(
	id_hilo integer,
	tipo varchar(30),
	material varchar(35),
	nombre varchar(35),
	"id_colorHilo" integer,
	id_proveedor integer,
	CONSTRAINT id_hilo PRIMARY KEY (id_hilo)

);
-- ddl-end --
-- object: public.etiquetas | type: TABLE --
-- DROP TABLE public.etiquetas;
CREATE TABLE public.etiquetas(
	id_etiqueta integer,
	nombre varchar(35),
	comentario varchar(60),
	CONSTRAINT id_etiqueta PRIMARY KEY (id_etiqueta)

);
-- ddl-end --
-- object: public."colorTela" | type: TABLE --
-- DROP TABLE public."colorTela";
CREATE TABLE public."colorTela"(
	"id_colorTela" integer,
	nombre varchar(40),
	descripcion varchar(40),
	CONSTRAINT "id_colorTela" PRIMARY KEY ("id_colorTela")

);
-- ddl-end --
-- object: public."diseñoTela" | type: TABLE --
-- DROP TABLE public."diseñoTela";
CREATE TABLE public."diseñoTela"(
	"id_diseñoTela" integer,
	"diseño" varchar(35),
	caracteristica varchar(40),
	CONSTRAINT "id_diseñoTela" PRIMARY KEY ("id_diseñoTela")

);
-- ddl-end --
-- object: public."materialTela" | type: TABLE --
-- DROP TABLE public."materialTela";
CREATE TABLE public."materialTela"(
	"id_materialTela" integer,
	material varchar(40),
	caracteristica varchar(40),
	CONSTRAINT "id_materialTela" PRIMARY KEY ("id_materialTela")

);
-- ddl-end --
-- object: public."colorBoton" | type: TABLE --
-- DROP TABLE public."colorBoton";
CREATE TABLE public."colorBoton"(
	"id_colorBoton" integer,
	color varchar(40),
	descripcion varchar(35),
	CONSTRAINT "id_colorBoton" PRIMARY KEY ("id_colorBoton")

);
-- ddl-end --
-- object: public."formaBoton" | type: TABLE --
-- DROP TABLE public."formaBoton";
CREATE TABLE public."formaBoton"(
	id_forma integer,
	descripcion varchar(35),
	CONSTRAINT id_forma PRIMARY KEY (id_forma)

);
-- ddl-end --
-- object: public."materialBoton" | type: TABLE --
-- DROP TABLE public."materialBoton";
CREATE TABLE public."materialBoton"(
	"id_materialBoton" integer,
	descripcion varchar(35),
	material varchar(35),
	CONSTRAINT "id_materialBoton" PRIMARY KEY ("id_materialBoton")

);
-- ddl-end --
-- object: public."Proveedor" | type: TABLE --
-- DROP TABLE public."Proveedor";
CREATE TABLE public."Proveedor"(
	id_proveedor integer,
	ruc numeric(15),
	nombre varchar(40),
	apellido varchar(40),
	telefono numeric(15),
	direccion varchar(70),
	CONSTRAINT id_proveedor PRIMARY KEY (id_proveedor)

);
-- ddl-end --
-- object: public."colorHilo" | type: TABLE --
-- DROP TABLE public."colorHilo";
CREATE TABLE public."colorHilo"(
	"id_colorHilo" integer,
	nombre varchar(40),
	caracteristica varchar(35),
	CONSTRAINT "id_colorHilo" PRIMARY KEY ("id_colorHilo")

);
-- ddl-end --
-- object: "fkTela" | type: CONSTRAINT --
-- ALTER TABLE public.producto DROP CONSTRAINT "fkTela";
ALTER TABLE public.producto ADD CONSTRAINT "fkTela" FOREIGN KEY (id_tela)
REFERENCES public.telas (id_tela) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: fk_etiqueta | type: CONSTRAINT --
-- ALTER TABLE public.producto DROP CONSTRAINT fk_etiqueta;
ALTER TABLE public.producto ADD CONSTRAINT fk_etiqueta FOREIGN KEY (id_etiqueta)
REFERENCES public.etiquetas (id_etiqueta) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: id_boton | type: CONSTRAINT --
-- ALTER TABLE public.producto DROP CONSTRAINT id_boton;
ALTER TABLE public.producto ADD CONSTRAINT id_boton FOREIGN KEY (id_boton)
REFERENCES public.botones (id_boton) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: id_hilo | type: CONSTRAINT --
-- ALTER TABLE public.producto DROP CONSTRAINT id_hilo;
ALTER TABLE public.producto ADD CONSTRAINT id_hilo FOREIGN KEY (id_hilo)
REFERENCES public.hilo (id_hilo) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: fkcoltel | type: CONSTRAINT --
-- ALTER TABLE public.telas DROP CONSTRAINT fkcoltel;
ALTER TABLE public.telas ADD CONSTRAINT fkcoltel FOREIGN KEY ("id_colorTela")
REFERENCES public."colorTela" ("id_colorTela") MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


-- object: "fkdiseñoT" | type: CONSTRAINT --
-- ALTER TABLE public.telas DROP CONSTRAINT "fkdiseñoT";
ALTER TABLE public.telas ADD CONSTRAINT "fkdiseñoT" FOREIGN KEY ("id_diseñoTela")
REFERENCES public."diseñoTela" ("id_diseñoTela") MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_materTe" | type: CONSTRAINT --
-- ALTER TABLE public.telas DROP CONSTRAINT "fk_materTe";
ALTER TABLE public.telas ADD CONSTRAINT "fk_materTe" FOREIGN KEY ("id_materialTela")
REFERENCES public."materialTela" ("id_materialTela") MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: fk_prov | type: CONSTRAINT --
-- ALTER TABLE public.telas DROP CONSTRAINT fk_prov;
ALTER TABLE public.telas ADD CONSTRAINT fk_prov FOREIGN KEY (id_proveedor)
REFERENCES public."Proveedor" (id_proveedor) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: "fkColBot" | type: CONSTRAINT --
-- ALTER TABLE public.botones DROP CONSTRAINT "fkColBot";
ALTER TABLE public.botones ADD CONSTRAINT "fkColBot" FOREIGN KEY ("id_colorBoton")
REFERENCES public."colorBoton" ("id_colorBoton") MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: fk_forma | type: CONSTRAINT --
-- ALTER TABLE public.botones DROP CONSTRAINT fk_forma;
ALTER TABLE public.botones ADD CONSTRAINT fk_forma FOREIGN KEY (id_forma)
REFERENCES public."formaBoton" (id_forma) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_matBot" | type: CONSTRAINT --
-- ALTER TABLE public.botones DROP CONSTRAINT "fk_matBot";
ALTER TABLE public.botones ADD CONSTRAINT "fk_matBot" FOREIGN KEY ("id_materialBoton")
REFERENCES public."materialBoton" ("id_materialBoton") MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: fk_prove | type: CONSTRAINT --
-- ALTER TABLE public.botones DROP CONSTRAINT fk_prove;
ALTER TABLE public.botones ADD CONSTRAINT fk_prove FOREIGN KEY (id_proveedor)
REFERENCES public."Proveedor" (id_proveedor) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: "fkPro" | type: CONSTRAINT --
-- ALTER TABLE public.hilo DROP CONSTRAINT "fkPro";
ALTER TABLE public.hilo ADD CONSTRAINT "fkPro" FOREIGN KEY (id_proveedor)
REFERENCES public."Proveedor" (id_proveedor) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


-- object: "fkColh" | type: CONSTRAINT --
-- ALTER TABLE public.hilo DROP CONSTRAINT "fkColh";
ALTER TABLE public.hilo ADD CONSTRAINT "fkColh" FOREIGN KEY ("id_colorHilo")
REFERENCES public."colorHilo" ("id_colorHilo") MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --



