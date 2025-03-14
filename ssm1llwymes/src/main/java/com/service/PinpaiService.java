package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.PinpaiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.PinpaiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.PinpaiView;


/**
 * 品种
 *
 * @author 
 * @email 
 * @date 2024-03-19 18:14:02
 */
public interface PinpaiService extends IService<PinpaiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<PinpaiVO> selectListVO(Wrapper<PinpaiEntity> wrapper);
   	
   	PinpaiVO selectVO(@Param("ew") Wrapper<PinpaiEntity> wrapper);
   	
   	List<PinpaiView> selectListView(Wrapper<PinpaiEntity> wrapper);
   	
   	PinpaiView selectView(@Param("ew") Wrapper<PinpaiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<PinpaiEntity> wrapper);

   	

}

