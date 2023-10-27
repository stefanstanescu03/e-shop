--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: accounts; Type: TABLE; Schema: public; Owner: eu
--

CREATE TABLE public.accounts (
    id bigint NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    pswrd character varying(100) NOT NULL
);


ALTER TABLE public.accounts OWNER TO eu;

--
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: eu
--

CREATE SEQUENCE public.accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_id_seq OWNER TO eu;

--
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eu
--

ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: eu
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    product_name character varying(50) NOT NULL,
    product_price integer NOT NULL,
    quantity integer NOT NULL,
    description character varying(200),
    sells integer
);


ALTER TABLE public.products OWNER TO eu;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: eu
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO eu;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eu
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: eu
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: eu
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: eu
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: eu
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

