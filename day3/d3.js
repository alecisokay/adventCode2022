// same as before with sed


//sed 's/$/",/' day3.txt > day3-1.txt
//sed 's/^/"/' day3-1.txt >day3-2.t

let arr = [
"dWlhclDHdFvDCCDfFq",
"mGdZBZBwRGjZMFgvTvgtvv",
"jwwJrzdzGdSbGGnNlzWczHzPHPhn",
"cczcbMBszhzzDBTBPPPGjtvtlt",
"LqJLfpwdLnvQLRGQjGtj",
"gSgnSJJCGSGpGSrwgfhchmmmHzcrHDmbrmMm",
"bVjstCsSstCLCrbSLnMpdMndcLddcqcpHR",
"wPZJQJwtBfJZmgBwPTcpTdcnfHMppcGMdG",
"gmFJzwPJJtszvNhCNC",
"DmjZDMZWDqGRqqRpHmmRLTTNTPTfCQJQQLJHTClc",
"FtzfvrfFwVgtzztgBLJNcNlTcTVNNQLN",
"vgsdbzzrwtqWfWRpZDdZ",
"rJhqRhLHhdcQqdHqfQGfPGstgGPlWttM",
"DzCpDDmnNCmBZBZnVBmZzBGPfsbglfNPwgPGPMWsWWft",
"BZFnlmpBpBzDzVZmhFHFrrrchhRqTdrc",
"DWCCWFNqdGFdPVcb",
"HllttQsTRlJlsblrHlhdmPLVcVcTccndLvPLmL",
"HSlstHgJltghhRrzNBNDzSwMjNZwNb",
"dzGSHCWSsGVVSdHVHHWWVVDCgJDpQqLTTRJpgmTLRmJTTpTR",
"BvNjMPZMBtBBMvvNMNttlhLQqCJpLmhTRQqQJgRJLQQg",
"llNncBlMCwwMnwPZrGsVHzcfFGdHGFGs",
"JfZhphMMQmFzDTDjSdrQjQ",
"sqHCbCwBVtbqbCqtrWdjzlSJTlrTSWBn",
"bHcwbGCGRssNscwtHNbwvmRFvpFFJFvLZMmPLFfv",
"qBCrzznVmDCmMMDNgrgcrvHHcgbQcW",
"TTTsdJRTRhhlsgbvbdCFdbWvbQ",
"JhGGlfRlJsnCMDMqjmfV",
"rqLLvDLtStDLQhQDQrQhhNdsmWdmmjjnssPnTMnTzfTsWT",
"ZRFFpgCgppcBcnjTsjTMTfPFMP",
"GCZpGlwJwBgGHcJhSSHLDDrNqrMtNq",
"FsPFqsDNZFNnZrcBmWfWWQ",
"lSnRlRTvgrWtctTmft",
"SMbGbbvnGlnSDwGqLwNCqNVD",
"dPQDcBwJJDgDTPgGgQTBVjSsmLhLTrLmjSLpjSLh",
"MvvZRHtMtbCNvCNCNtNvbRfBSMSrjmLpjnjmVhrVSLsnnmSh",
"qHZtbBZfRztbHbCzNRHPQgJPJgGgglFPPFqdQD",
"MsBsVDspRPfPlhMl",
"zWnCFzHbSCwqNmPSjmGlsmfN",
"FnHnFbFzsHHCCgzCzbBptVppgvvVgVrpBrJt",
"pTLntptZjQLfVDjQTDlVJCSWNCPSCCsSNmFlNslm",
"BBHbqGHHqgwSWSCCWwZWWZ",
"qRzbhhbzzrHdRRHhRHvzZjfrVTrppVQttDfcQTfp",
"DHsdHPHHsHMsRmhMZZQBtljgZGtC",
"NFnCbFznLVJbVrjhQthjGBLZBjGL",
"wNrfFJJbCpNnfbdwDSDHsvsHmsmH",
"jLZRjnMMjJhJnvtQbdHfHZbvHQ",
"mBzwptCWlcFCwsHSTpQfQHQfrpTb",
"mNltzmsCNmFzGwCBllGRgRgqjgLMnGqjnPjV",
"ZqqcqmVVtbcBMFfFMcQfgphJ",
"HLWLDvWjjLwTWzzvGLThQQshQllgJDJgfbffJQ",
"vHzLvrwwzGzTRGzzLLRPRwRdSVdnBBdSbBSVStbNmnrmZS",
"TWVVvPSgwWSqcRgRwbRRcqshsfFzzzChTGNHzHhhhCsG",
"njZrjMLlpmDmGfSGtrNttzCF",
"ZQBmZdDBZRRPRSBgcb",
"TpntvdpnZDptnbnTDGtSFSlFmzCzzmSFRjqlZj",
"MWrNcWRMlgqzMjzq",
"NPwsPNrBNcVHNNcJHBNBcJwwttDvGVnDptVRtbnTtGvVGtGG",
"tsbbvvSfnqvzQLLBjfMLdd",
"gJRmRNmJNchgmmrFJhFgWJQMwBnjwrMBVQwQTBdLdVQj",
"GcGpGGRGJgqstvpbnCqb",
"rsHcrbZHBTTtLtNSwwHLLJ",
"mFqhWVsjsVCjQlNJGMwMlMMGMh",
"QggzffQRCfgVFWzzCQffqfZpZDcRvTTBTvvZnsdnddcn",
"bPFMFFBpMlFfMZMpHGNSrNctJcPSSchJchPt",
"zCgwnmgzQDnQgdWWQRgqSrqLSqSgssLNJhgJ",
"rQCQQTrRRmDBFfbHBFHZbT",
"fzfPQsGrrMMjtHtBHs",
"SwNNDqwhWpVTwbDGGDmwSVhZRZHdbCtgBjCRjMtbBHtRMd",
"vVTGvVGNvPPvQvfncJ",
"cwzMJbclHDPqfJQPfq",
"rrqjjTBrqqBjRCgTjrRjNrsGPDhDFGCfWGfPFfFPGWfD",
"BZTTSTZgjbSwVptvpq",
"PPPPJpvpJsJwPHHPsJdTNZRZZZjTFFmRRRNjZd",
"qbWVfChDCDnVVDGfnSFNNjRLmNfBNLQjLjmBRm",
"DhFDhbnWCDhGcbJPPwrsrMwrvlvc",
"lFSDTwHTSwlTNwFFlwNcFFpjLZvZqvnqLPnnWbgngbbncqbZ",
"rzQfMzRGrRGJCffBMGdGsJZWWnqWVqdPPgNvvVZWPWWn",
"RJrttBtNQCsNzTpShhHFDwFlth",
"QNzQFjNFrQPNbmPpqTTDGswWmB",
"ggHRcSlcCVCSzMVqDGwgqTWpsmqwqG",
"cltzCZtLClHRRtMZZLQjfNvtrJfhvrddvNNd",
"mcfWHffBFnQRQlTFdv",
"wssSLVbbzDVbzbggzSzNshNMnvnljRdvQRlMBjvQdnCj",
"bhDzVSSJDDJhDLBwtbDzzbbWppfpcmWGmprqqGtqprcHPp",
"rpVFrZpgHWSZrFPqhzwcqPwmcVBD",
"vMTnQJjQLCbljvvQzTMbTjPNdBLwwDhmhNNqPwmmhhBh",
"jvGjjQJnrspGHgFz",
"sjssjtZlcphZHwWvcrHTwWJH",
"qDdzzrFNNNDGdFDzzVBVVvfWJPfgPmgWPgvwVH",
"nqMQGDrnLGnqqLNqjtCZZjsMhZhCMbtl",
"JJJsLFmzsrFlSpzPscjgHhnRnmvcjqRvvj",
"fCMQbCbTjjqTGhjc",
"bfdbWdCddfBbtCfbfbqVWQQpPlBrJLJJSSLwppFssFzLzp",
"pdbbzlffWtJbgQwhcphQcCCg",
"vHvLFvVLvSfFRLnRFRNHjPjggcssQcjjsnwhsPCC",
"vGVGGFFVHLTvDRHDmBbTzfZWMdJZlfMm",
"wjCbjQgjTQhNNzgWQCWrDFMZmZDZDCrrMDpLpL",
"czGSPznnRGGJGGlVVRVBGGlBmDDcMDFDDZLqfffZFrrZqFpZ",
"JPGlvBSJHVGnVsjvQjjzwdwjzd",
"MFlWQHDTpnpsFNNQllWFWlhzjGgrgDzGGhGGjvmZDZrh",
"PtTPcTLbBCVPTRVcvhjmmhVhSZGGgvZg",
"JLPfCwPbTbBPJCfblplMpqWsMpMwWHQn",
"QbHVBBzWtzHBNtBwQSgqhqSbFgRLjhmqqj",
"ZnCnMcdsDnJTncggFJwRmSwgRFmL",
"sTMZpGDvsZcMpcvTCPHwzrfzrpzHpWBrWz",
"PMdJWwJWHFWJnNzbDlfbCfMvbl",
"rZgttrFptFFcBtccbbCDvgfbGCGGgGDz",
"QsZBmsrFscrVrjQJjJQRJWWLwq",
"GwNNJwwRThwrWfhh",
"SmQqmzsjHssQzCbvsmSSzsQTjWpFTTfFfThchhFTBBfppB",
"mmbHbmtmCzzQZzQRdZJhNMdMlRMglh",
"rrsPbncQvvgnnrTdGDVcCdpZHHZp",
"RwwwhjLLqtJFwjzwtwmwwGpDZVdGDVdZBZDFHdHZCp",
"zhzwLhhfffLtjNChgWbbrbnMvPrMrrfv",
"tQMtQtTSBFtSmQSttMggMtbtnTnPrZvrnzNNTGZvrZZdLdnL",
"HqhwDpDcwlHqpVrrFzvFGpZrrzrP",
"RwlhhjwRCjVfjDbMtFWBWJMgWjWm",
"WpWVlWzsGlBJpspNclNlhhhmgzrdtzQMQttzMmtt",
"RfnPRLTPDHRdPbwvvntnSrFgmvnmtm",
"CwqRDCCwqCwbCTqJcJBNcZqdVcBlpJ",
"tpfnNBsGGNRppRCgfgRRCRQJGMPPWdwMJdWFFwjVzGPJ",
"chLSchLTbLqvqcZLlvvLqbmldMzFFWdzVSFWFMzQVJwjQjdM",
"rLqqcjDrcvhRsDfHDtNNnN",
"DjZjvTTDqrtTZZSMcdRdmRJrcJNc",
"HWgPGVhFPgnSVtnJcdMs",
"FPLfBwCWGPfCwfLHCCDBZlbDpBjvqTtDzzDj",
"FJNqNFgNFssqGGqBsTlMVcgVrCwLwlhcrw",
"fRZzDmDZvvDdZbtdpDZmbrThrLMCvcChwwlSTrvMSr",
"zmfZmtZmpDmbfWRDDZdqFljqnNQjGWnsjFqGsG",
"rMdMWddmJmvdSdmWfWMddpVRqRFVHRRqMRRPQMRqRq",
"tDGtGGhLjLLZNLjjNgNthGtqHTVqRVVpPDRpHHVRQVRPPR",
"ZlLtzNjgsZZlssLgtjNpfWfJvlJrrvCJfBmBfn",
"hqpWvFJsJFNHhqMWNhWvWRmmDcDMLcwZnjcwnjRnjn",
"LdrlgCCrSSTrTnwRjmwRQZwdwG",
"PVlfClrLlLlfggtBPzHHhHFbWzJNbvqJFNqF",
"TbbQtnDtbGGjGlGsGHpJJmFWFJJrBWWFlWrS",
"CZzzNzzhddNchhMhhRVjpCBwBrCvJvpmSCvrwJ",
"fhZZhddRjRgZzMZRzPjPTsLGQtHLTHTbDPQTtqPT",
"nHnWsQNQQWTWQshwjBJJJmHwFBwm",
"VZZpfbffZVvbSbGfBhSwmtmmJlmjJFJJ",
"bpphpMfMvMzDbMGZgQNrrngzdTsNqWdd",
"VPNddVTPPmdnVcPVZcdTmcDbQTFjMpjtFzbMtFjzsFTssT",
"lJCllWCrgvRlgwlJfRRvSzjSjQpbzMHpbwMQpszM",
"fRhGBBJJCgrNLsNPNVVhNq",
"pLrVDgbNbjVplpsltHBqWSqhSQcHDttH",
"MCdCwCGTmnTmmmvTTCwCqNhHQhRWcwHWBRHSqSQH",
"TNTFFPfffTvFTJvTPCPTFfGdzVjspVLZglJbsbZpVblrzjlb",
"cdPzFrldgcdCrnlznPzrBNRssLLBbVNVZsLHRHdm",
"wTQQwvvtqwqcGvTZmVHBbVLLBbRV",
"GWJSGfJWcjQwhQQWjqJhhGfgpMnMzDnpMlPpMnDlMrzl",
"pMhqTTsSpdBPpNBshsdMMTQFvFlQtQWCRQlCllVFqVqG",
"dfcbnmrnjzRFvGQQGvfv",
"mDrjLLLcJjLhpZSSJMdpph",
"NGZNwqFqZhhcFSCfRzwdzRfCzVRw",
"QTTmBTsWQWJPPCvzvpHPzdvVFR",
"bsmWTBbQDbmbLQQMsWWQchgqLqhGGGGZLhSFjhqS",
"HgmGlgsvBBDgBGCdHHvHwCGwhZJWhTjSdhTSFFFhJtSJTJhT",
"RQfVrfQNszMQfpMzpNnfLbtjhtSbWJWFWtFFtFJtFSZq",
"PNzLfnLnBCPHgsgC",
"mTZGgCdNSNmCQLLpPnDhRlGhpV",
"vWJHWFsfHMWBBFbBsjfjHrFfLRRLPPnpLthttRVPLSnhSPbS",
"fzMrBjWfBrzsZCZmSTgQzcNN",
"mgmCZCMgmnZmZgBZpgpJfbQfwSQPDTdfdwSDfwhn",
"sHhcrWLcFlzHcHRNNFvNFcFPwDDTWdddDdqWbSTWDPTTQS",
"RNsslsRrNcRNvNRFFNvVsghZBJtVCCtCtGghjhGBGG",
"gchrcRRdnRwPPnvQ",
"CVCCSrDjFHjVDbBLFGGBSvwnwNMnMsPPNsNPvwPQVM",
"lHLCTHGDCbbjFTTzdWlpcqfgcrdzZg",
"fRDPsDsqqJttttJSzPDgJWQCbQQbGMWCCnGGPVGVQQ",
"rTTBvZhrvBnWWDWCbZWW",
"cwLlTLpjTwBFLLhgfRRfmRqRDmRdjq",
"sprGGPTrJTsGPzszqGzNtTtpfbQddQSQSDFDFvvbZvwFbbfN",
"LWWCMVmwMmgWFQfFDDvZDgdF",
"mlMmRVCWVMmmHRjVCmjHWRhMzpTtlrlPzrtzwlsGPrpwtrJp",
"tsfwwfjfdfrtrClfvwvvLnTHNmvLHcNccRNcvNWH",
"qQSqZqFQRBzghDFncHgmccHNmWcNmM",
"SQJphFJzRDSsdpVlllrCrw",
"vGQqLQFvBvLvdNnvjnvNDc",
"TRJwmWmZWlCCmzznbNhhbDhRgj",
"CCTtDTlmDTWTmDmZZlVLLsFfstfFFLsBLQfF",
"cfWflMmWWlWfPWBhBlQtLmmvrrrvCLjvRTjLLwwr",
"gSgbsbgHdsjzHbqbdVDLZLvTZwLTvSrZrFvZLw",
"sdbJqDNdjJNdsJBpBWpJlMcfcB",
"FHlMHPqDLlPctgHSnttCSC",
"zhrmBrTwJTjBmQcSQvQqbtwGvg",
"jBjmBmJjjjRZTBzhhrBJLDdZqfpDMdfWWlDDLMlV",
"zPVdbsBzZdwqJGhrLTvNNJqH",
"tmmCgCPCDDnptHDjNvGvhrDvLv",
"pRWRlpSpPllClnpbQVQwFFVSQFVBZz",
"nDrCvmvMnMSmsCvblBzzCZplbJlTbZ",
"FNRtFWRfcGqFGQbzlZTQqQTBbd",
"GRwFfNtwFRNFGMvBsnnwMMMBjn",
"LVTBjjlJCDrnJzJNQR",
"GsGGsggGpfhgpchgdqzbMzzhzQRnnMRrNzzR",
"PwWFqFGpwWpdWgfsGggdmjCVHPHlCCCVZNCjVmVj",
"qVTsCWwbCsPlCVfcbvfPDgLzbzDDhrzRrjgZghgr",
"ntmHmNpSQNGtntNttmSdSdBdjrrDLQZQLLhRrFFFRDTFZhDF",
"mtMtBNTSNBpNJStMGSdHppNcVWPsWvqVcsVJfwwqlqWqlc",
"vvWzLvvdpZDvhTpcrLcTTLpdwSPnCfJwCMnQSMwSnCGJrnwr",
"ttHVmVNNsHBBRsHbMMwwnjnjBfjJwCMP",
"tsVllgNVqbRlfplldDvDWT",
"mLjLsQqLQqsBRvvlRBLRlT",
"bhgtDDhCtmptmTTS",
"nfmdbggwGWrfsPzfWq",
"JpWDcSGJpGzsHPSSlbbd",
"wVRqVZwwRwPDwbDddH",
"VtVVVLthLVtVgfQLRTNtqDcCcJBmmWMWWprpFrcBJWNp",
"dhhhDtmLdttdPlslGlRFjfzBBpzzRpGJ",
"QMrVMwbVrrbvVVCrvcnqQQrrSMBJfpjFSzfjJFMFRWSpjjFG",
"cwvbHHbCqVchRDHgDsPTdt",
"CgVNCtDsDtJGZZGqMMGhDq",
"cLRnSHgWcRdLHWSSRLjQdlHBTTPcPwwhzqzTMBPTwhPPwP",
"HnnnglnWWgdRjlmQNsNFmJCFJFvsJsNN",
"hfccLbjhfSRbfDZjFRJzrlvlwwlnnFrWwzqr",
"TCsPLNtQdpdQQVtVNvJNJWlzJzwlrvJl",
"pHtPsPtPtCQfbRHHDHhMLh",
"nWRWgLtWnfTcZNNsscfd",
"JMGzMVJwMVTvzVQFGHMMmPdddsPsCjldlHPcScNPsP",
"vGrMQQmmvTQzMJpghWRWgpbbBqLbLR",
"WSbhFbPTpRfTfPdhpfbhSbfPQLzlQlzlHvtQsvlltlsgHdgQ",
"pZcGJDZNGcVrJwrDrrnvtNvlNzsgtgzvvsgt",
"qmJZZJcBqwrMJcVbWfSPPWpmpjmSCF",
"jHVjjCcpNrDgjsfB",
"ndqllRvJQtqlQQTRWllFNDrsMZBfDBLvNMNDfsbZ",
"qTFnWJqdWRdqWRlnTRnQGnTmwwSHCzpcGNmHNcPVcHGmCz",
"pZCpBhDfvgBVZQGMMVZVlq",
"sLsLTTSssjPnTNbFGRGFPVHqMMRF",
"TsNSccnjLdcsLjdmjWvWvBhfmvWpCGhGhD",
"VWFFFPMpPVSMbTppHTnHTbRH",
"DtvfNdBNddDNSLjsvDTTHnzzHwrTrwsrwqbT",
"dgBLNffdgjjtfBQSvgNjNDlvMcQJmJJmZCMmVVVZFPFcPMGG",
"VWsQLHMVVSNRShWLhNSNLjbbbddbpDZDddcbZdDRztpd",
"FPlhhgPvThGFJndnnCCnJzzdCp",
"qrTfmllGvfvGqwNMMMsffsQsNh",
"NsmFqNlmnQRbCFsmJgSffpPcbvSfrVvpgS",
"LhZGDZhhwtDHMwDdHGhDjDpTzzPdzgTvcPvpSSpPrdrv",
"jgHMjBLhwtZMHMHmJNNJNFlBqlBJNn",
"bznSQggscgMcSTTfJbSQzQFwClMhmCmthClvMwFLwhZL",
"BRWBPBVVPjPNVHpVqlqrvtwFqmmLqltZmL",
"WDVddNHNvRgccgsDsgbT",
"sNgnQLtLLLPPnsPpqdqjBclpGWjcWjBG",
"rVCChSZhVrrwqVDVHSHmMjldGfJGfHddJGJlfGjGJj",
"CVZmDvZCmmhFVVrCgTNbbnQFgbsqNqNQ",
"WmMmSSfJNRRPfJRMRMtllCgdStgbgttgCdDd",
"QGBrvzwBczlgqCtDbvDq",
"QQpBGFrLQjQzGVVRNjPmNNWMbW",
"gGljnJhnJtllpNVCHWcccdTdjdmB",
"bLfSQDSMSHmBnwCB",
"LFMDrbFfFQZQRzLZnbgtlsRGtltpgNhgPpPG",
"cRThZZchCThtgTRhZTRtjWFjWNwqCjGmwFjqqffC",
"DPDPGzPMHDbrpqjfwrjqmjmp",
"JVHHDdVdVbvGMdnVdQVdDbHcRZllhRtgStRLThRSTcBTvc",
"lQWPSBrrPZGgPglGssDfHnWsfDFHHvHh",
"TDCqpttptJNLtwNpbwTqzqHshsvsMMFnmHMNfssmvmvf",
"JCjqVpDtrBjQjrlj",
"wFGWGpFLvCczNSWWsz",
"tlfgtftjlbtHHlDBsBzmQQnsQDQsCn",
"gjfrsVqVgPlfqhvLdvdwZhGq",
"pHpZHBSvRvRCBBZCTMngRnWndnRmWcgg",
"jsfrfrjJFDwDDMMggMCGWGcfmG",
"qbCszCjtCjQsQrtZVBHBHvBvqLZvlp",
"scFzsPScNgNPNgQzpttlCBCwpLrMLCrDdljLwq",
"TjfGZZjVwMZwMLwr",
"vnGbWTvTmFRjQFQPsb",
"bVLrzqrzJVgJbbtVrWJVgppcBCzBvdzwBCCBHDcBvc",
"hflPQnMQmQSRlQMPNRTHwwHHHqpHpdfwdBCp",
"hFhZMhqSNMNbrZgWWGWJjZ",
"NJsgNjJlMHQrwnRgSRPwrP",
"tqpQtTFpFvbGpzTTWSrnSbrhwChCnRfrCf",
"GtcvGqQpttzcqdFzWppDsZMJjBBsBJcBNmBjMsLJ",
"lGfZGZhFfhdSWqmFFWSS",
"wDRDPLcDnjtWbSmqrSCSLC",
"MPwmtVnVMjztznHPgQhQfJfvvHHGggQZ",
"llTspLllCHmLHHndldqHdlLQQPSBQczZSFDDQZSNGcGG",
"jMhwvVrRjbRhFBZNGPcGNN",
"wVtrrtRwrfrwftjVjwWvMrRpsqsnsHsBglslCmTsdWdHTd",
"vPvmTGgDPRvGpDPGPqGHQnWJQJMBBzJBlBQWlHWl",
"bfbwNsmwFdLjbfrrLsSfLNQtMllznBzJQZMQtMlZZnnF",
"frssSscssNfScCjfSCwjsDmRDpGmDRDvvvVcvRDvRp",
"LtlPZPjBTbWsWJVJVzdT",
"nnprqhrqmzfrSrphqfCChVVGVDJWgSHHWgWsRDVHWd",
"nrmppNqhcCrfMchcMCncqbzPZvlvlwbBNjPjtNjZjL",
"FPWsFdSspVbbbtWVvl",
"CCHnnfHHvCwtVMhzlzDllC",
"LrGnjGfgfvcwfgrLrBjrBLgwdBTSRBFsRZdRsSqFFSFSSPPp",
"whGCLqsrjgGhhGFqrCCFGCGzTRTZJcNnzlLTnznNHcnzTH",
"ddvVmbfvdvVbDVQdvvdSzpNcnJzlzSRHNJpnJcSc",
"BPdvfQdWtPDDPfDvDQVVPmbhssCGGMqgFCFMqGMWgMjrRw",
"PSLbGmWPSPLQbMTPWGFWltthdDdrmBDHhdDdczzDRh",
"VfCngVfgsZwCftrZdhcZrdNDzz",
"CjVJJJqnJwQhWPPLQlGj",
"ntnnQmTQTQGVWGNGNNlClG",
"jDffjMSvqjHzHHzwNVwNVcCddPVNdD",
"ZszJsrrZMjsHqqvZJLRQCbTRQbJmThbt",
"BgLHgFDsJNWgQgflWd",
"mnVVcCHnCGRcVnZSjmlthftMQddlfhQctNfW",
"qbSGqmHSTFprvpvTTL",
"dvdTMvvpdLpTcSLvdLLMmhfFBftwCNhRwRNjtCTRCf",
"lshQWgsgrHHqlFfRqFjRFfFwCB",
"rsgHQbJbrsGHHlgQHgJrlHrPZdhdpMZGDSDpdPLcZhdvhZ"]



let arr2 = ["vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"]

// abc string for 1-52  - value charMap.indexAt()+1
let charmap= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" 
//add it to a value
let vals = 0;
arr.forEach(el => {
    // split it
    let middle = Math.floor(el.length / 2);
    let stringA = el.substr(0, middle);
    let stringB = el.substr(middle + 1);
    //only want one letter even if it contains multiple ones
    let letter = "";

    // check each letter in stringA and if it exsits in B get the value of it and add to vals.
    for(c of stringA){
        if (stringB.includes(c) && c != letter) {
            letter = c;
            vals += charmap.indexOf(c)+1;
        }
    }
})

console.log(vals);